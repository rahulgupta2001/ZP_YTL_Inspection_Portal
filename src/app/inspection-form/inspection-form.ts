import {
  Component,
  OnInit,
  OnDestroy,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface NominatimResponse {
  display_name: string;
}

@Component({
  selector: 'app-inspection-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './inspection-form.html',
  styleUrls: ['./inspection-form.css'],
})
export class InspectionFormComponent implements OnInit, OnDestroy {
  @ViewChildren('videoPlayer') videoPlayers!: QueryList<ElementRef>;
  @ViewChildren('photoCanvas') photoCanvases!: QueryList<ElementRef>;

  inspectionForm!: FormGroup;

  capturedPhotos: {
    dataUrl: string | null;
    lat: number | null;
    lon: number | null;
    address: string | null;
    cameraActive: boolean;
    mediaStream: MediaStream | null;
  }[] = Array(4)
    .fill(0)
    .map(() => ({
      dataUrl: null,
      lat: null,
      lon: null,
      address: null,
      cameraActive: false,
      mediaStream: null,
    }));

  talukas: string[] = [
    'Arni', 'Babulgaon', 'Darwha', 'Digras', 'Ghatanji',
    'Kalamb', 'Mahagaon', 'Maregaon', 'Ner', 'Pandharkawada',
    'Pusad', 'Ralegaon', 'Umarkhed', 'Wani', 'Zari Jamani', 'Yavatmal',
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.inspectionForm = this.fb.group({
      projectName: ['', Validators.required],
      year: ['', Validators.required],
      taluka: ['', Validators.required],
      village: ['', Validators.required],
      beneficiaryName: ['', Validators.required],
      inspectionOfficer: ['', Validators.required],
      comments: ['', Validators.required],
      remarks: ['', Validators.required],
      photo1: this.fb.group({ dataUrl: ['', Validators.required], lat: [''], lon: [''], address: [''] }),
      photo2: this.fb.group({ dataUrl: ['', Validators.required], lat: [''], lon: [''], address: [''] }),
      photo3: this.fb.group({ dataUrl: ['', Validators.required], lat: [''], lon: [''], address: [''] }),
      photo4: this.fb.group({ dataUrl: ['', Validators.required], lat: [''], lon: [''], address: [''] }),
    });
  }

  ngOnDestroy(): void {
    this.capturedPhotos.forEach((photo, i) => this.stopCamera(i));
  }

  /** ================= Camera Methods ================= */
  async startCamera(index: number) {
    const photo = this.capturedPhotos[index];
    if (photo.cameraActive) return;

    try {
      photo.mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video: HTMLVideoElement = this.videoPlayers.toArray()[index].nativeElement;
      video.srcObject = photo.mediaStream;
      await video.play();
      photo.cameraActive = true;
    } catch (err) {
      console.error('Error starting camera:', err);
      alert('Could not access the camera. Check permissions.');
    }
  }

  stopCamera(index: number) {
    const photo = this.capturedPhotos[index];
    if (photo.mediaStream) {
      photo.mediaStream.getTracks().forEach(track => track.stop());
      photo.mediaStream = null;
    }
    photo.cameraActive = false;
  }

  /** ================= Capture Photo ================= */
  async capturePhoto(index: number) {
    const photo = this.capturedPhotos[index];
    if (!photo.cameraActive) {
      alert('Camera is not active.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const address = await this.getReverseGeocode(lat, lon);

        const video: HTMLVideoElement = this.videoPlayers.toArray()[index].nativeElement;
        const canvas: HTMLCanvasElement = this.photoCanvases.toArray()[index].nativeElement;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');

        if (context) {
          context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
          const dataUrl = canvas.toDataURL('image/png');

          // Update captured photo
          this.capturedPhotos[index] = { ...photo, dataUrl, lat, lon, address };

          // Patch form
          const photoGroup = this.inspectionForm.get(`photo${index + 1}`);
          photoGroup?.patchValue({ dataUrl, lat, lon, address });
        } else {
          alert('Could not capture the photo.');
        }
      },
      err => {
        console.error('Error getting location:', err);
        alert('Could not get location. Check permissions.');
      }
    );
  }

  /** ================= Reverse Geocoding ================= */
  async getReverseGeocode(lat: number, lon: number): Promise<string> {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;
    try {
      const response = await this.http.get<NominatimResponse>(url).toPromise();
      return response?.display_name || 'Address not found';
    } catch (err) {
      console.error('Reverse geocode error:', err);
      return 'Could not fetch address';
    }
  }

  /** ================= Submit Form ================= */
  onSubmit() {
    if (this.inspectionForm.valid) {
      console.log('Form submitted successfully:', this.inspectionForm.value);
      alert('Form submitted successfully!');
    } else {
      alert('Please fill all required fields.');
      this.inspectionForm.markAllAsTouched();
    }
  }
}

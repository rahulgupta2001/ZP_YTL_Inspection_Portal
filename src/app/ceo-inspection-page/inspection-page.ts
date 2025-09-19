import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Inspection } from './data.service';

@Component({
  selector: 'app-inspection-page', // ✅ must match template
  standalone: true, // ✅ important
  imports: [CommonModule, FormsModule],
  templateUrl: './inspection-page.html',
  styleUrls: ['./inspection-page.css'],
})
export class CEOInspectionPage implements OnInit {
  data: any[] = [];
  filteredData: any[] = [];
  selectedType: string = 'लाभार्थी';
  selectedTaluka: string = '';
  selectedVillage: string = '';
  searchText: string = '';
  inspectionData: Inspection[] = []; // सर्व डेटा
  selectedRow: Inspection | null = null; // popup मध्ये दिसणारा selected row

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data = this.dataService.getInspectionData();
    this.filteredData = this.data;
    this.inspectionData = this.dataService.getInspectionData();
  }
  // तपशील दाखवण्यासाठी
  showDetails(row: Inspection) {
    this.selectedRow = row;
  }

  // तपशील बंद करण्यासाठी
  closeDetails() {
    this.selectedRow = null;
  }

  applyFilter() {
    this.filteredData = this.data.filter((item) => {
      return (
        (!this.selectedTaluka || item.taluka === this.selectedTaluka) &&
        (!this.selectedVillage || item.village === this.selectedVillage) &&
        (!this.searchText ||
          item.beneficiary
            .toLowerCase()
            .includes(this.searchText.toLowerCase()))
      );
    });
  }
}

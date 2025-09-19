// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   getInspectionData() {
//     return [
//       {
//         yojna: "प्रधान मंत्री आदर्श ग्राम योजना - A",
//         year: "2024-2025",
//         taluka: "वणी",
//         village: "बोरगाव",
//         beneficiary: "Sourabh Jadhav",
//         officer: "Sourabh Jadhav",
//         date: "12/07/2025",
//         action: "Inspection"
//       },
//       {
//         yojna: "प्रधान मंत्री आदर्श ग्राम योजना - B",
//         year: "2025-2026",
//         taluka: "वणी",
//         village: "भुरकी",
//         beneficiary: "Mayuresh Bhagat",
//         officer: "Shahbaz Khan",
//         date: "15/07/2025",
//         action: "Inspection"
//       },
//       {
//         yojna: "विशिष्ट जमाती (PVTGs) संरक्षण व विकास कार्यक्रम - A",
//         year: "2022-2023",
//         taluka: "कळंब",
//         village: "भवनपूर",
//         beneficiary: "Manideep Gonewar",
//         officer: "Sourabh Jadhav",
//         date: "10/07/2025",
//         action: "Re-Inspection"
//       }
//     ];
//   }
// }


import { Injectable } from '@angular/core';

// Interface for Inspection data
export interface Inspection {
  yojna: string;
  year: string;
  taluka: string;
  village: string;
  beneficiary: string;
  officer: string;
  date: string;
  action: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getInspectionData(): Inspection[] {
    return [
      {
        yojna: "प्रधान मंत्री आदर्श ग्राम योजना - A",
        year: "2024-2025",
        taluka: "वणी",
        village: "बोरगाव",
        beneficiary: "Sourabh Jadhav",
        officer: "Sourabh Jadhav",
        date: "12/07/2025",
        action: "Inspection"
      },
      {
        yojna: "प्रधान मंत्री आदर्श ग्राम योजना - B",
        year: "2025-2026",
        taluka: "वणी",
        village: "भुरकी",
        beneficiary: "Mayuresh Bhagat",
        officer: "Shahbaz Khan",
        date: "15/07/2025",
        action: "Inspection"
      },
      {
        yojna: "विशिष्ट जमाती (PVTGs) संरक्षण व विकास कार्यक्रम - A",
        year: "2022-2023",
        taluka: "कळंब",
        village: "भवनपूर",
        beneficiary: "Manideep Gonewar",
        officer: "Sourabh Jadhav",
        date: "10/07/2025",
        action: "Re-Inspection"
      }
    ];
  }
}

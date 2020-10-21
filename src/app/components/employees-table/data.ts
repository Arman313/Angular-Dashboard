 export interface EmployeesTableItem {
    name: string;
    title:string;
    status:string;
    id: number;
  }
  
  // TODO: replace this with real data from your application
 export const DATA: EmployeesTableItem[] = [
    {id: 1, name: 'Arman Gin',title:'CEO',status:'hired'},
    {id: 2, name: 'Daniel Polak',title:'CTO',status:'hired'},
    {id: 3, name: 'Ronnie Michayev',title:'CEO',status:'hired'},
    {id: 4, name: 'Lior Rozman',title:'Security',status:'hired'},
  ];
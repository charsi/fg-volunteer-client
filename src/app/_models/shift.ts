export class Shift {
    id: string;
    assignedTo: string; //userID
    type: string; // [dismantle/test/build/clean]
    subType:string; // [small/large/ram/hdd/misc]
    date:Date;
    startTime:string; 
    endTime:string; 
    trainingAvailable:boolean; 
}
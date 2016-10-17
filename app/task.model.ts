import { IPerson } from './IPerson.model';

  export interface ITask {
      description: string;
      done: boolean;
      priority: string;
      markDone(): void;
      type: string;
      assignedTo?: IPerson;
    }

    export class Task implements ITask {
      done: boolean = false;
      constructor(public description: string, public priority: string, public type: string,public assignedTo?: IPerson){}
      markDone(){
        this.done = true;
      }
    }

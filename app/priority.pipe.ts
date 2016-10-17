import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({
  name: "priorities",
  pure: false
})
export class PrioritiesPipe implements PipeTransform {
  transform(input: Task[], info) {
    var desiredCompleteness = info;
    var output: Task[] = [];
    if(desiredCompleteness === "high") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].priority === "high") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "medium") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].priority === "medium")  {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "low") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].priority === "low")  {
            output.push(input[i]);
          }
        }
        return output;
    } else {
      return input;
    }
  }
}

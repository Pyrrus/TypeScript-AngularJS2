import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({
  name: "locations",
  pure: false
})
export class LocationsPipe implements PipeTransform {
  transform(input: Task[], info) {
    var desiredCompleteness = info;
    var output: Task[] = [];
    if(desiredCompleteness === "work") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "work") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "home") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "home")  {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "hobby") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].type === "hobby")  {
            output.push(input[i]);
          }
        }
        return output;
    } else {
      return input;
    }
  }
}

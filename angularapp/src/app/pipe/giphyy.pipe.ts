import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'giphyy',
})
export class GiphyyPipe implements PipeTransform {
  transform(gifs: any[], query: string): any[] {
    if (query == null || query == '') {
      return gifs;
    } else {
      return gifs.filter((gif) =>
        gif.title.toLowerCase().startsWith(query.toLowerCase())
      );
    }
  }
}

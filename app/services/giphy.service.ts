import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class Giphy {
  private link = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=20";

  constructor(private http: Http) {}

  getTrendyGifs(): Observable<any> {
    return this.http.get(this.link).
                map(res => {
                  let result = res.json(),
                      data = result.data;

                  if(!data) return [];

                  return data.map(element => ({
                    url:  element.images.fixed_height_small.url,
                    id:   element.id
                  }));
                });
  }
}
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class Giphy {
  private link = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=20";
  private basicUrl = "http://api.giphy.com/v1/gifs";
  private apiKey = "api_key=dc6zaTOxFJmzC";

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

  getGifById(id: string): Observable<any> {
    return this.http.get(`${this.basicUrl}/${id}?${this.apiKey}`).
                map(res => {
                  let result = res.json(),
                      data = result.data;

                   if(!data) return {};

                   return {
                     url: data.images.fixed_height_small.url,
                     id: data.id
                   };
                });
  }
}
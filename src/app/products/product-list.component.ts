import { Component, Inject, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as _ from 'underscore';
import { APP_CONFIG, AppConfig } from '../app-config';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  products: { name: string }[];

  constructor(private http: Http, @Inject(APP_CONFIG) private appConfig: AppConfig) {}

  public ngOnInit(): void {
    const url = `${this.appConfig.apiEndpoint}/products`;

    // Get the list of products
    this.http.get(url)
      .subscribe((response: Response) => this.products = response.json());
  }

  get hasProducts(): boolean {
    return this.products && !_.isEmpty(this.products);
  }
}

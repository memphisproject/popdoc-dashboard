import { Component, OnInit } from '@angular/core';
import {TilesService} from '../../_services/tiles.service';

@Component({
  selector: 'app-fixed-tiles',
  templateUrl: './fixed-tiles.component.html',
  styleUrls: ['./fixed-tiles.component.css']
})
export class FixedTilesComponent implements OnInit {
  public collections = [];
  public filteredCollections = [];
  searchInput = '';

  constructor(private tilesService: TilesService) {
    this.getCollection();
  }

  ngOnInit() {
  }

  getCollection() {
    this.collections = [];

    this.tilesService.getTiles().subscribe(res => {
      for (let [key, value] of Object.entries(res)) {
        this.collections.push({title: value.title, _id: value._id, image: value.image, isSticky: value.isSticky});
        this.filteredCollections.push({title: value.title, _id: value._id, image: value.image, isSticky: value.isSticky});
      }
    });
  }

  filterCollection() {
    this.filteredCollections = this.collections.filter(el => el.title.toLowerCase().search(this.searchInput.toLowerCase()) !== -1)
  }

  addCollectionToStickyTile(collection) {
    collection.isSticky = !collection.isSticky;
    this.tilesService.addCollectionToStickyTiles(collection._id).subscribe(res => {
      console.log(res);
    });
  }

  removeCollectionToStickyTile(collection) {
    collection.isSticky = !collection.isSticky;
    this.tilesService.removeCollectionToStickyTiles(collection._id).subscribe(res => {
      console.log(res);
    });
  }
}

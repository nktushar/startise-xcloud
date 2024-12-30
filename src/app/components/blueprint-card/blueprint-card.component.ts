import { XcloudService } from './../../services/xcloud-service/xcloud.service';
import { Component, inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blueprint-card',
  imports: [],
  templateUrl: './blueprint-card.component.html',
  styleUrl: './blueprint-card.component.scss',
})
export class BlueprintCardComponent implements OnInit {
  xcloudService = inject(XcloudService);
  isSelected: boolean = false;
  @Input() blueprint: any;
  @Input() isDarkMode: boolean = false;

  constructor() {}
  ngOnInit() {
    this.xcloudService.selectedBlueprint.subscribe((blueprint) => {
      this.isSelected = blueprint.isDefault == true;
    });
  }
}

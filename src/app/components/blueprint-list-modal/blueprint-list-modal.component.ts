import { Component, inject, Input, OnInit } from '@angular/core';
import { XcloudService } from '../../services/xcloud-service/xcloud.service';
import { BlueprintCardComponent } from '../blueprint-card/blueprint-card.component';

@Component({
  selector: 'app-blueprint-list-modal',
  imports: [BlueprintCardComponent],
  templateUrl: './blueprint-list-modal.component.html',
  styleUrl: './blueprint-list-modal.component.scss',
  standalone: true,
})
export class BlueprintListModalComponent implements OnInit {
  xcloudService = inject(XcloudService);

  allBlueprints: any[] = [];

  constructor() {}
  ngOnInit() {
    this.xcloudService.blueprints.subscribe((blueprints) => {
      this.allBlueprints = blueprints;
    });
  }

  createNewBlueprint() {
    this.xcloudService.showBlueprintListModal.next(false);
    this.xcloudService.showCreateBlueprintModal.next(true);
  }

  okButton() {
    this.xcloudService.showBlueprintListModal.next(false);
  }
}

import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-img",
  templateUrl: "./img.component.html",
  styleUrls: ["./img.component.css"],
})
export class ImgComponent implements OnInit {
  @Input() url: any = "";
  @Input() width: any = "";
  @Input() height: any = "";

  constructor() {}

  ngOnInit(): void {}
}

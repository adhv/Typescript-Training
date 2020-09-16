//Instruction to every other class on how to they can be an argument to 'addMaker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  // color: string;
}
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById('map'), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}

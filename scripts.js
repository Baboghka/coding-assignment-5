//Beginning of MusicPlayersClass
class MusicPlayersClass {
  constructor(nameValue, address, street, city, zip, state) {
    this.name = nameValue; //I changed this so you can see how those values are passed in
    this.address = address;
    this.street = street;
    this.city = city;
    this.zip = zip;
    this.state = state;

    this.musicPlayers = [
      {
        name: "Luca",
        address: {
          street: "123 W Lilly Rd",
          city: "Naples",
          zip: "85308",
          state: "FL",
        },
        membershipLevel: "GOLD",
        age: 33,
      },
      {
        name: "Lana",
        address: {
          street: "6789 S Virginia St",
          city: "Boston",
          zip: "12345",
          state: "MA",
        },
        membershipLevel: "PLATINUM",
        age: 27,
      },
      //more MusicPlayers objects with the same schema
    ];
  }

  //Beginning of Lanas function
  lanasFunction() {
    let newMusicPlayersData = [];

    for (let index = 0; index < this.musicPlayers.length; index++) {
      let MusicPlayersName = this.musicPlayers.length[index].name;
      let MusicPlayersMembership = this.musicPlayers[index].membershipLevel;
      let MusicPlayersStreet = this.musicPlayers[index].address.street;
      newMusicPlayersData.push({
        firstName: MusicPlayersName,
        MusicPlayersMembership,
        MusicPlayersStreet,
      });
      console.log(
        "index #:",
        index,
        "MusicPlayers Data: ",
        `
    Name: ${MusicPlayersName}
    Membership: ${MusicPlayersMembership}
    Address: ${MusicPlayersStreet}
    `
      );
    } // End of loop
    console.log("The loop has completed....\n\n\n");
    console.log("newMusicPalyersData Variable:", newMusicPlayersData);
    console.log("new MusicPalyers:", newMusicPlayersData[1].firstName);
    console.log(`s`);

    // After pushing to the array I then have it return the array
    return newMusicPlayersData;
  } //End of Lanas function

  //Beginning of createNewMusicPlayer
  createNewMusicPlayer() {
    let name = prompt("Enter name for new  music player: ");
    let membership = prompt("Enter membership for a new player: ");
    NewMusicPlayer.addPlayer(NewMusicPlayer(name, membership));
  } //End of createNewMusicPlayer

  //Beginning of deleteNewMusicPlayer
  deleteNewMusicPlayer() {
    let name = prompt(
      "Enter the name of the music player that you wish to delete: "
    );
    if (name !== Lana && name !== Luca < NewMusicPlayer.length) {
      NewMusicPlayer.Player.splice(name);
    }
  } //End of deleteNewMusicPlayer

  //End of MusicPlayersClass
}

let menu = new MusicPlayersClass();

menu.lanasFunction();

import React from "react";
import Header from "../Layout/header";
import AddRandomContact from "./addRandomContact";
import RemoveAllContact from "./removeAllContacts";
import AddContact from "./addContact";
import FavouriteContacts from "./favouriteContacts";
import GeneralContacts from "./generalContacts";
import Footer from "../Layout/footer";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Oleksandr Bondarenko",
          phone: "1234355353",
          email: "albom2004q@gmail.com",
          isFavourite: true,
        },
        {
          id: 2,
          name: "Dmytro Galytskyy",
          phone: "4363462432",
          email: "galytskyy@gmail.com",
          isFavourite: false,
        },
        {
          id: 3,
          name: "Myhaylo Balachon",
          phone: "6089035335",
          email: "etwwegvds@gmail.com",
          isFavourite: true,
        },
      ],
    };
  }

  handleAddContact = () => {
    alert("Hello");
  };

  render() {
    return (
      <div>
        <Header></Header>
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact></AddRandomContact>
            </div>
            <div className="col-4">
              <RemoveAllContact></RemoveAllContact>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <AddContact
                  handleAddContact={this.handleAddContact}
                ></AddContact>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <FavouriteContacts
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavourite === true
                  )}
                ></FavouriteContacts>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContacts
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavourite === false
                  )}
                ></GeneralContacts>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default ContactIndex;

import React from "react";
import Header from "../Layout/header";
import AddRandomContact from "./addRandomContact";
import RemoveAllContact from "./removeAllContacts";
import AddContact from "./addContact";
import FavouriteContacts from "./favouriteContacts";
import GeneralContacts from "./generalContacts";
import Footer from "../Layout/footer";

class ContactIndex extends React.Component {
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
              <AddContact></AddContact>
            </div>
            <div className="row py-2">
              <FavouriteContacts></FavouriteContacts>
            </div>
            <div className="row py-2">
              <GeneralContacts></GeneralContacts>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default ContactIndex;

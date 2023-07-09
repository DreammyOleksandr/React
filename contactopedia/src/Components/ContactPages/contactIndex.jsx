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
          name: "Myhaylo Balakhon",
          phone: "6089035335",
          email: "etwwegvds@gmail.com",
          isFavourite: true,
        },
      ],
    };
  }

  handleAddContact = (newContact) => {
    if (newContact.name === "") {
      return { status: false, msg: "Please, enter a valid name" };
    } else if (newContact.phone === "") {
      return { status: false, msg: "Please, enter a valid phone number" };
    }

    const duplicateRecord = this.state.contactList.filter((x) => {
      if (x.name === newContact.name && x.phone === newContact.phone) {
        return true;
      }
      return false;
    });
    if (duplicateRecord.length > 0) {
      return { status: "failure", msg: "Duplicate record" };
    } else {
      const newFinalContact = {
        ...newContact,
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        isFavourite: false,
      };
      this.setState((prevState) => {
        return {
          contactList: prevState.contactList.concat([newFinalContact]),
        };
      });
      return { status: "success", msg: "Contact was added successfully!" };
    }
  };

  handleDeleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.filter((obj) => {
          return obj.id !== contactId;
        }),
      };
    });
  };

  handleToggleFavourite = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.id === contact.id) {
            return { ...obj, isFavourite: !obj.isFavourite };
          }
          return obj;
        }),
      };
    });
  };

  handleAddRandomContact = (newContact) => {
    const newFinalContact = {
      ...newContact,
      id: this.state.contactList[this.state.contactList.length - 1].id + 1,
      isFavourite: false,
    };
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.concat([newFinalContact]),
      };
    });
  };
  handleRemoveAllContacts = () => {
    this.setState((prevState) => {
      return {
        contactList: [],
      };
    });
  };

  render() {
    return (
      <div>
        <Header></Header>
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2 row">
              <AddRandomContact
                handleAddRandomContact={this.handleAddRandomContact}
              ></AddRandomContact>
            </div>
            <div className="col-4 row">
              <RemoveAllContact
                handleRemoveAllContacts={this.handleRemoveAllContacts}
              ></RemoveAllContact>
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
                  favouriteClick={this.handleToggleFavourite}
                  deleteContact={this.handleDeleteContact}
                ></FavouriteContacts>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContacts
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavourite === false
                  )}
                  favouriteClick={this.handleToggleFavourite}
                  deleteContact={this.handleDeleteContact}
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

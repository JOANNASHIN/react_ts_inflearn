interface PhoneNumberDictionary {
  [phone: string]: { //phone은 의미가 크지 않음!! 임시 변수같은 느낌
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  Home = "home",
  Office = "office",
  Studio = "studio",
}

// api
function fetchContacts(): Promise<Contact[]>  {
  const contacts: Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  contacts: Contact[] = [];

  constructor() {
    this.fetchData();

  }

  fetchData() {
    fetchContacts().then(response => {
      this.contacts = response;
    });
  }

  findContactByName(name: string): Contact[] {
    return this.contacts.filter(contact => contact.name === name);
  }

  findContactByAddress(address: string):Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }

  // findContactByPhone(phoneNumber: number, phoneType: string):Contact[] {
  //   return this.contacts.filter(
  //     contact => contact.phones[phoneType].num === phoneNumber
  //   );
  // }

  //오타날 경우 대비해서 enum으로 대비!!! !!!!
  //사용할때도 findContactByPhone(PhoneType.Home)
  findContactByPhone(phoneNumber: number, phoneType: PhoneType):Contact[] {
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }


  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  displayListByName(): string[] {
    return this.contacts.map(contact => contact.name);
  }

  displayListByAddress(): string[] {
    return this.contacts.map(contact => contact.address);
  }
  /* ------------------------------------------------ */
}

new AddressBook();

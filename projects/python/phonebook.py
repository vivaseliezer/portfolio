"""
Phonebook Contact Directory (CLI)
Stores, lists, searches, and deletes contacts using Python dictionaries.
"""


class Phonebook:
    def __init__(self) -> None:
        self.contacts: dict[str, str] = {}

    def add_contact(self, name: str, phone: str) -> None:
        clean_name = name.strip()
        clean_phone = phone.strip()
        if not clean_name or not clean_phone:
            raise ValueError("Both name and phone number are required.")
        self.contacts[clean_name] = clean_phone

    def search(self, query: str) -> list[tuple[str, str]]:
        q = query.strip().lower()
        return [(n, p) for n, p in self.contacts.items() if q in n.lower()]

    def delete_contact(self, name: str) -> bool:
        return self.contacts.pop(name.strip(), None) is not None


def run_cli() -> None:
    book = Phonebook()

    while True:
        print("\n--- Phonebook Directory ---")
        print("1. Add contact")
        print("2. List all contacts")
        print("3. Search by name")
        print("4. Delete contact")
        print("5. Exit")

        choice = input("Choose an option (1-5): ").strip()

        if choice == "1":
            name = input("Name: ")
            phone = input("Phone number: ")
            try:
                book.add_contact(name, phone)
                print(f"Saved contact: {name.strip()}")
            except ValueError as err:
                print(err)
        elif choice == "2":
            if not book.contacts:
                print("Phonebook is empty.")
            else:
                print(f"\n{'Name':<22} Phone Number")
                print("-" * 40)
                for n, p in sorted(book.contacts.items()):
                    print(f"{n:<22} {p}")
        elif choice == "3":
            term = input("Search name: ")
            matches = book.search(term)
            if matches:
                for n, p in matches:
                    print(f"Found -> {n}: {p}")
            else:
                print("Name not found.")
        elif choice == "4":
            name = input("Exact name to delete: ")
            print("Deleted." if book.delete_contact(name) else "Contact not found.")
        elif choice == "5":
            break
        else:
            print("Invalid option.")


if __name__ == "__main__":
    run_cli()

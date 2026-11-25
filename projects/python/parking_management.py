"""
Parking Management System (CLI)
Manages vehicle check-in/out, available parking slots, hourly rates, and itemized billing.
"""

from datetime import datetime

RATES = {
    "Bicycle": 20,
    "Bike": 40,
    "Car": 60,
}

TAX_RATE = 0.18


class ParkingSystem:
    def __init__(self, cars: int = 250, bikes: int = 100, bicycles: int = 78):
        self.spaces = {"Car": cars, "Bike": bikes, "Bicycle": bicycles}
        self.records: list[dict] = []

    def add_vehicle(
        self,
        vehicle_no: str,
        vehicle_type: str,
        vehicle_name: str,
        owner_name: str,
        date_str: str | None = None,
        time_str: str | None = None,
    ) -> bool:
        plate = vehicle_no.strip().upper()
        if not plate or any(r["vehicle_no"] == plate for r in self.records):
            return False
        if vehicle_type not in self.spaces or self.spaces[vehicle_type] <= 0:
            return False

        now = datetime.now()
        self.records.append(
            {
                "vehicle_no": plate,
                "vehicle_type": vehicle_type,
                "vehicle_name": vehicle_name.strip(),
                "owner_name": owner_name.strip(),
                "date": date_str or now.strftime("%d-%m-%Y"),
                "time": time_str or now.strftime("%H:%M:%S"),
            }
        )
        self.spaces[vehicle_type] -= 1
        return True

    def remove_vehicle(self, vehicle_no: str) -> dict | None:
        plate = vehicle_no.strip().upper()
        for idx, rec in enumerate(self.records):
            if rec["vehicle_no"] == plate:
                removed = self.records.pop(idx)
                self.spaces[removed["vehicle_type"]] += 1
                return removed
        return None

    def calculate_bill(self, vehicle_type: str, hours: int) -> dict:
        billable_hours = max(1, int(hours))
        base = billable_hours * RATES[vehicle_type]
        tax = round(base * TAX_RATE, 2)
        return {"hours": billable_hours, "base": base, "tax": tax, "total": round(base + tax, 2)}


def run_cli() -> None:
    system = ParkingSystem()
    type_map = {"a": "Bicycle", "b": "Bike", "c": "Car"}

    while True:
        print("\n" + "=" * 54)
        print("            PARKING MANAGEMENT SYSTEM")
        print("=" * 54)
        print("1. Vehicle Entry")
        print("2. Remove Entry")
        print("3. View Parked Vehicles")
        print("4. View Available Parking Spaces")
        print("5. View Hourly Rates")
        print("6. Generate Bill")
        print("7. Exit")

        choice = input("\nSelect option (1-7): ").strip()

        if choice == "1":
            plate = input("Vehicle number (e.g. VA-12-AB34): ").strip().upper()
            vtype_key = input("Vehicle type (Bicycle=A / Bike=B / Car=C): ").strip().lower()
            vtype = type_map.get(vtype_key)
            if not vtype:
                print("Invalid vehicle type.")
                continue
            vname = input("Vehicle model/name: ").strip()
            owner = input("Owner name: ").strip()
            if system.add_vehicle(plate, vtype, vname, owner):
                print(f"Saved check-in for {plate} ({vtype}).")
            else:
                print("Could not add vehicle (duplicate plate or lot full).")

        elif choice == "2":
            plate = input("Vehicle number to remove: ").strip().upper()
            removed = system.remove_vehicle(plate)
            print(f"Removed {removed['vehicle_no']}." if removed else "No matching entry found.")

        elif choice == "3":
            if not system.records:
                print("No vehicles currently parked.")
            else:
                print(f"\n{'Plate':<14} {'Type':<10} {'Model':<14} {'Owner':<14} {'Date':<12} {'Time'}")
                print("-" * 76)
                for r in system.records:
                    print(
                        f"{r['vehicle_no']:<14} {r['vehicle_type']:<10} {r['vehicle_name']:<14} "
                        f"{r['owner_name']:<14} {r['date']:<12} {r['time']}"
                    )

        elif choice == "4":
            for vtype, left in system.spaces.items():
                print(f"Available spaces for {vtype}: {left}")

        elif choice == "5":
            for vtype, rate in RATES.items():
                print(f" - {vtype}: ${rate} / hour")

        elif choice == "6":
            plate = input("Vehicle number for billing: ").strip().upper()
            match = next((r for r in system.records if r["vehicle_no"] == plate), None)
            if not match:
                print("Vehicle not found.")
                continue
            try:
                hours = int(input("Hours parked: ").strip())
            except ValueError:
                print("Please enter a valid number of hours.")
                continue
            bill = system.calculate_bill(match["vehicle_type"], hours)
            print(f"\nParking Charge ({bill['hours']}h): ${bill['base']:.2f}")
            print(f"Tax (18%):            ${bill['tax']:.2f}")
            print(f"Total Due:            ${bill['total']:.2f}")

        elif choice == "7":
            print("Goodbye!")
            break
        else:
            print("Please select a valid option (1-7).")


if __name__ == "__main__":
    run_cli()

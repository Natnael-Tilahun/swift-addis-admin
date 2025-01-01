interface NavItem {
  title: string;
  url: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface NavMainItem extends NavItem {
  isActive?: boolean;
}

interface Booking {
  id: string;
  clientDetails: {
    firstName: string;
    lastName: string;
    email?: string;
    phone: string;
  };
  vehicleDetails: {
    carType: string;
    make?: string;
    model?: string;
    year?: number;
  };
  images?: {
    url: string;
    description?: string;
  }[];
  location: {
    address: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  service_ids: string[];
  selectedAddOns?: string[];
  appointmentDate: string;
  serviceStartingTime: string;
  bookingEndTime?: string;
  status?: string;
  assignedTo?: string;
  appointmentNote?: string;
  totalPrice: number;
  createdAt?: string;
  updatedAt?: string;
}

interface DayOffs {
  date: string;
  reason: string;
  times: string[];
}

interface Service {
  id: string;
  name: string;
  description?: string;
  pricing?: {
    SUV?: {
      basePrice?: number;
      maxPrice?: number;
    };
    AUTO?: {
      basePrice?: number;
      maxPrice?: number;
    };
  };
  duration?: {
    SUV?: number;
    AUTO?: number;
  };
  image?: string;
  additionalServices?: string[];
  features?: string[];
  available?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface AddOn {
  id: string;
  name: string;
  price: number;
}

interface Gallery {
  id: string;
  url: string;
}

interface Blog {
  id: string;
  title: string;
  content: string;
  date: string;
}

interface Team {
  id: string;
  name: string;
  logo: string;
  plan: string;
}

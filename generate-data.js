import {faker} from '@faker-js/faker';

function generateHotelData() {
    const roomTypes = ['Penthouse', 'Double Room', 'King Room', 'Adjacent Room', 'Adjoining Room', 'Suite', 'Queen Room', 'Parlor', 'Cabana', 'Twin Room', 'Quad'];
    const amenities = ['Swimming Pool', 'Fitness Center', 'Spa and Wellness Center', 'On-site Restaurant', 'Free Wi-Fi', 'Room Service', 'Concierge Service'];

    return {
        hotel_id: faker.string.uuid(),
        hotel_name: faker.company.buzzNoun(),
        description: faker.company.buzzAdjective(),
        address: {
            city: faker.location.city(),
            postal_code: faker.location.zipCode(),
            country: faker.location.country(),
        },
        contact: {
            phone: faker.phone.imei(),
            email: faker.internet.email(),
        },
        rooms: Array.from({ length: 10 }, (_, i) => ({
            room_id: (i + 101).toString(),
            room_type: faker.commerce.productName(),
            description: faker.company.buzzAdjective(),
            capacity: faker.number.int({ min: 1, max: 4 }),
            price_per_night: faker.commerce.price(2500, 10000),
            availability: faker.datatype.number({ min: 0, max: 10 }),
        })),
        amenities: faker.helpers.arrayElements(amenities, faker.datatype.number({ min: 1, max: 4 })),
    };
}

const hotelsData = Array.from({ length: 20 }, generateHotelData);
console.log(JSON.stringify(hotelsData, null, 2));

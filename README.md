# Flight Ferry

A peer-to-peer delivery concept: people who need to send a parcel find travelers already flying the same route, and travelers can post their upcoming trips with the luggage space they have left.

**Live demo:** [flight-ferry.vercel.app](https://flight-ferry.vercel.app/)

Built as a front-end test project for a client.

## Features

- **Find a traveler** by origin, destination, date and parcel weight (up to 10, 20 or 30 kg)
- **Trip cards** with route, schedule, flight number, booking reference and available weight
- **Post your trip** flow for travelers offering space
- **Profile** with personal details and a "My trips" overview
- **Sign-up** form with password visibility toggle
- Responsive layout from mobile to desktop

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) with TypeScript
- [NextUI](https://nextui.org/) components and [Framer Motion](https://www.framer.com/motion/) animations
- [Tailwind CSS](https://tailwindcss.com/)
- `@internationalized/date` for date inputs

## Getting started

```bash
git clone https://github.com/zuandabaransyahputra/flight-ferry.git
cd flight-ferry
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

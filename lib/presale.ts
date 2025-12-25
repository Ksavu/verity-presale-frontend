// Simulacija kupaca i ukupnog USD
let buyers = [
  { address: "buyer1", amountUSD: 5000 },
  { address: "buyer2", amountUSD: 2000 },
  { address: "buyer3", amountUSD: 10000 },
];

export const getTotalUSD = () => {
  return buyers.reduce((acc, b) => acc + b.amountUSD, 0);
};

export const getBuyers = () => buyers;

// Funkcija za test dodavanja kupca (simulacija)
export const addBuyer = (address: string, amountUSD: number) => {
  buyers.push({ address, amountUSD });
};

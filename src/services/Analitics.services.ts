// services/analytics.services.ts
export const BASE_URL = "https://integrative-salescope.onrender.com";

type WeeklySale = {
  week: string;
  units_sold: number;
  revenue: number;
};

export async function getTotalSales(): Promise<number> {
  const res = await fetch(`${BASE_URL}/analytics/weekly-sales`, {
    cache: "no-store",
  });

  const json = await res.json();

  console.log("DATA:", json.data);

  return (json.data as WeeklySale[]).reduce(
    (acc, w) => acc + w.revenue,
    0
  );
}

export async function getDailyAverage(): Promise<number> {
  const res = await fetch(`${BASE_URL}/analytics/weekly-sales`, {
    cache: "no-store",
  });

  const json = await res.json();

  const weeklyData = json.data as WeeklySale[];

  if (!weeklyData || weeklyData.length === 0) return 0;

  const totalRevenue = weeklyData.reduce(
    (acc, w) => acc + w.revenue,
    0
  );

  const totalDays = weeklyData.length * 7;

  return Number((totalRevenue / totalDays).toFixed(2));
}

export async function getProductsSold(): Promise<number> {
  const res = await fetch(`${BASE_URL}/analytics/weekly-sales`, {
    cache: "no-store",
  });

  const json = await res.json();

  const weeklyData = json.data as WeeklySale[];

  if (!weeklyData || weeklyData.length === 0) return 0;

  return weeklyData.reduce(
    (acc, w) => acc + w.units_sold,
    0
  );
}


export async function getTransactions(): Promise<number> {
  const res = await fetch(`${BASE_URL}/orders`, {
    cache: "no-store",
  });

  const json = await res.json();
  const orders = json.data;

 
  const totalOrders = orders.length;

  console.log(totalOrders);
  return totalOrders;
}


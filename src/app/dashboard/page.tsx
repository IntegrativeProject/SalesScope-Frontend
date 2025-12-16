"use client";
import { motion } from "framer-motion";
import BarChart from "@/components/charts/BarChart";
import Card from "@/components/ui/Card";
import LineChart from "@/components/charts/LineChart";
import { useEffect, useState } from "react";
import {
  getDailyAverage,
  getProductsSold,
  getTopProducts,
  getTotalSales,
  getTransactions,
  getWeeklySales,
} from "@/services/Analitics.services";
import { TopProduct, WeeklySale } from "@/types/analytics";
import AnimatedPage from "@/components/AnimatedPage";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Page() {
  const [lineLabels, setLineLabels] = useState<string[]>([]);
  const [lineData, setLineData] = useState<number[]>([]);

  const [barLabels, setBarLabels] = useState<string[]>([]);
  const [barData, setBarData] = useState<number[]>([]);

  const [totalSales, setTotalSales] = useState(0);
  const [dailyAvg, setDailyAvg] = useState(0);
  const [productsSold, setProductsSold] = useState(0);
  const [transactions, setTransactions] = useState(0);

  function formatCOP(value: number): string {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(value);
  }

  // --- LÓGICA DE DATOS (SIN CAMBIOS) ---
  useEffect(() => {
    Promise.all([
      getTotalSales(),
      getDailyAverage(),
      getProductsSold(),
      getTransactions(),
    ]).then(([sales, avg, products, trans]) => {
      setTotalSales(sales);
      setDailyAvg(avg);
      setProductsSold(products);
      setTransactions(trans);
    });
  }, []);

  useEffect(() => {
    async function loadCharts() {
      const weekly = await getWeeklySales();

      setLineLabels(
        weekly.map((w: WeeklySale) =>
          new Date(w.week).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })
        )
      );

      setLineData(weekly.map((w: WeeklySale) => w.revenue));

      const products = await getTopProducts(5);

      setBarLabels(products.map((p: TopProduct) => p.name));

      setBarData(products.map((p: TopProduct) => p.total_sold));
    }

    loadCharts();
  }, []);
  // -------------------------------------

  return (
    <AnimatedPage>
      {/* El contenedor principal usa padding ajustado en móvil y no necesita p-1 */}
      <div className="py-4"> 
        
        {/* TÍTULO PRINCIPAL: Usa padding horizontal (px-4) en móvil en lugar de margen fijo (ml-9) */}
        <h1 className="px-4 p-1 lg:ml-9 font-bold text-3xl lg:text-4xl">
          Dashboard
        </h1>
        
        {/* SUBTÍTULO: Se mantiene el ajuste de margen solo en escritorio */}
        <h2 className="px-4 p-1 lg:ml-9 font-semibold text-base lg:text-xl">
          Summary of your sales and key metrics
        </h2>
        
        {/* CONTENEDOR DE TARJETAS (MÉTRICAS) */}
        <motion.div
          className="
            px-4 lg:ml-11          /* Padding horizontal en móvil, margen fijo en escritorio */
            grid 
            grid-cols-2           /* Mobile por defecto: 2 columnas */
            lg:grid-cols-4        /* Desktop: 4 columnas */
            gap-3 lg:gap-x-3 
            mt-5
          "
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* NOTA: Se cambia w="w-80" por w="w-full" para que ocupe el espacio de la columna */}
          
          <motion.div variants={itemVariants}>
            <Card
              w="w-full" 
              h="h-50"
              mainText="Total Sales"
              worth={formatCOP(totalSales)}
              percentage="12.5%"
              endText=" vs previous week"
              iconRoute="/icons/ventas.png"
              simbol={true}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Card
              w="w-full" 
              h="h-50"
              mainText="Daily Average"
              worth={formatCOP(dailyAvg)}
              percentage="18.3%"
              endText="vs previous week"
              iconRoute="/icons/promedio.png"
              simbol={true}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Card
              w="w-full" 
              h="h-50"
              mainText="Products Sold"
              worth={productsSold}
              percentage="15.2%"
              endText="vs previous week"
              iconRoute="/icons/box.png"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Card
              w="w-full" 
              h="h-50"
              mainText="Transaction"
              worth={transactions}
              percentage="9.8%"
              endText="vs previous week"
              iconRoute="/icons/money.png"
            />
          </motion.div>
        </motion.div>

        {/* CONTENEDOR DE GRÁFICOS */}
        <div 
            className="
                grid 
                grid-cols-1            /* Mobile por defecto: 1 columna */
                lg:grid-cols-2         /* Desktop: 2 columnas */
                gap-6                  
                p-4 lg:p-15            /* Padding reducido en móvil, original en escritorio */
                mt-8
            ">
          
          {/* GRÁFICO 1: Weekly Sales */}
          <motion.article
            className="bg-base-200 w-full rounded-xl shadow-xl p-4 sm:p-8 space-y-3" // w-160 cambiado a w-full
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <h1 className="text-xl font-bold">Weekly Sales</h1>
            <p className=" -mt-3">Evolution of daily sales in pesos</p>
            <LineChart labels={lineLabels} data={lineData} />
          </motion.article>
          
          {/* GRÁFICO 2: Best Selling Products */}
          <motion.article
            className="bg-base-200 w-full rounded-xl shadow-xl p-4 sm:p-8 space-y-3" // w-160 cambiado a w-full
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <h1 className="text-xl font-bold ">Best Selling Products</h1>
            <p className=" -mt-3">Top 5 products by quantity sold</p>
            <BarChart labels={barLabels} data={barData} />
          </motion.article>
        </div>
      </div>
    </AnimatedPage>
  );
}
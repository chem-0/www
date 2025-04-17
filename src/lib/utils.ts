import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getElementColor = (color: string) => {
  const colorClassMap: { [key: string]: string } = {
    // Existing colors
    "#FFC0CB":
      "text-pink-500 border-pink-400 bg-pink-300/10 hover:bg-pink-300/30",
    "#D9FFFF":
      "text-cyan-500 border-cyan-400 bg-cyan-100/10 hover:bg-cyan-100/30",
    "#CC80FF":
      "text-purple-500 border-purple-400 bg-purple-300/10 hover:bg-purple-300/30",
    "#C2FF00":
      "text-lime-500 border-lime-400 bg-lime-400/10 hover:bg-lime-400/30",
    "#FFB5B5": "text-red-500 border-red-400 bg-red-300/10 hover:bg-red-300/30",
    "#909090":
      "text-gray-500 border-gray-400 bg-gray-500/10 hover:bg-gray-500/30",
    "#3050F8":
      "text-blue-500 border-blue-400 bg-blue-600/10 hover:bg-blue-600/30",
    "#FF0D0D": "text-red-500 border-red-400 bg-red-500/10 hover:bg-red-500/30",
    "#90E050":
      "text-green-500 border-green-400 bg-green-400/10 hover:bg-green-400/30",
    "#B3E3F5": "text-sky-500 border-sky-400 bg-sky-200/10 hover:bg-sky-200/30",
    "#AB5CF2":
      "text-purple-500 border-purple-400 bg-purple-500/10 hover:bg-purple-500/30",
    "#8AFF00":
      "text-lime-500 border-lime-400 bg-lime-500/10 hover:bg-lime-500/30",
    "#BFA6A6":
      "text-rose-500 border-rose-400 bg-rose-300/10 hover:bg-rose-300/30",
    "#F0C8A0":
      "text-orange-500 border-orange-400 bg-orange-200/10 hover:bg-orange-200/30",
    "#FF8000":
      "text-orange-500 border-orange-400 bg-orange-500/10 hover:bg-orange-500/30",
    "#FFFF30":
      "text-yellow-500 border-yellow-400 bg-yellow-300/10 hover:bg-yellow-300/30",
    "#1FF01F":
      "text-green-500 border-green-400 bg-green-500/10 hover:bg-green-500/30",
    "#80D1E3":
      "text-cyan-500 border-cyan-400 bg-cyan-300/10 hover:bg-cyan-300/30",
    "#8F40D4":
      "text-purple-500 border-purple-400 bg-purple-600/10 hover:bg-purple-600/30",
    "#3DFF00":
      "text-green-500 border-green-400 bg-green-400/10 hover:bg-green-400/30",
    "#E6E6E6":
      "text-gray-500 border-gray-400 bg-gray-200/10 hover:bg-gray-200/30",
    "#BFC2C7":
      "text-gray-500 border-gray-400 bg-gray-400/10 hover:bg-gray-400/30",
    "#A6A6AB":
      "text-gray-500 border-gray-400 bg-gray-400/10 hover:bg-gray-400/30",
    "#8A99C7":
      "text-blue-500 border-blue-400 bg-blue-400/10 hover:bg-blue-400/30",
    "#9C7AC7":
      "text-purple-500 border-purple-400 bg-purple-400/10 hover:bg-purple-400/30",
    "#E06633": "text-red-500 border-red-400 bg-red-500/10 hover:bg-red-500/30",
    "#F090A0":
      "text-pink-500 border-pink-400 bg-pink-300/10 hover:bg-pink-300/30",
    "#50D050":
      "text-green-500 border-green-400 bg-green-500/10 hover:bg-green-500/30",
    "#C88033":
      "text-orange-500 border-orange-400 bg-orange-600/10 hover:bg-orange-600/30",
    "#7D80B0":
      "text-indigo-500 border-indigo-400 bg-indigo-400/10 hover:bg-indigo-400/30",
    "#C28F8F":
      "text-rose-500 border-rose-400 bg-rose-400/10 hover:bg-rose-400/30",
    "#668F8F":
      "text-teal-500 border-teal-400 bg-teal-500/10 hover:bg-teal-500/30",
    "#BD80E3":
      "text-purple-500 border-purple-400 bg-purple-300/10 hover:bg-purple-300/30",
    "#FFA100":
      "text-amber-500 border-amber-400 bg-amber-500/10 hover:bg-amber-500/30",
    "#A62929": "text-red-500 border-red-400 bg-red-700/10 hover:bg-red-700/30",
    "#5CB8D1":
      "text-cyan-500 border-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/30",
    "#702EB0":
      "text-purple-500 border-purple-400 bg-purple-700/10 hover:bg-purple-700/30",
    "#00FF00":
      "text-green-500 border-green-400 bg-green-500/10 hover:bg-green-500/30",
    "#94FFFF":
      "text-cyan-500 border-cyan-400 bg-cyan-200/10 hover:bg-cyan-200/30",
    "#94E0E0":
      "text-teal-500 border-teal-400 bg-teal-200/10 hover:bg-teal-200/30",
    "#73C2C9":
      "text-teal-500 border-teal-400 bg-teal-400/10 hover:bg-teal-400/30",
    "#54B5B5":
      "text-teal-500 border-teal-400 bg-teal-500/10 hover:bg-teal-500/30",
    "#3B9E9E":
      "text-teal-500 border-teal-400 bg-teal-600/10 hover:bg-teal-600/30",
    "#248F8F":
      "text-teal-500 border-teal-400 bg-teal-700/10 hover:bg-teal-700/30",
    "#0A7D8C":
      "text-cyan-500 border-cyan-400 bg-cyan-800/10 hover:bg-cyan-800/30",
    "#006985":
      "text-cyan-500 border-cyan-400 bg-cyan-900/10 hover:bg-cyan-900/30",
    "#C0C0C0":
      "text-gray-500 border-gray-400 bg-gray-400/10 hover:bg-gray-400/30",
    "#FFD98F":
      "text-amber-500 border-amber-400 bg-amber-300/10 hover:bg-amber-300/30",
    "#A67573":
      "text-rose-500 border-rose-400 bg-rose-500/10 hover:bg-rose-500/30",
    "#668080":
      "text-teal-500 border-teal-400 bg-teal-700/10 hover:bg-teal-700/30",
    "#9E63B5":
      "text-purple-500 border-purple-400 bg-purple-500/10 hover:bg-purple-500/30",
    "#D47A00":
      "text-orange-500 border-orange-400 bg-orange-600/10 hover:bg-orange-600/30",
    "#940094":
      "text-purple-500 border-purple-400 bg-purple-900/10 hover:bg-purple-900/30",
    "#429EB0":
      "text-cyan-500 border-cyan-400 bg-cyan-600/10 hover:bg-cyan-600/30",
    "#57178F":
      "text-purple-500 border-purple-400 bg-purple-800/10 hover:bg-purple-800/30",
    "#00C900":
      "text-green-500 border-green-400 bg-green-600/10 hover:bg-green-600/30",
    "#70D4FF": "text-sky-500 border-sky-400 bg-sky-300/10 hover:bg-sky-300/30",
    "#FFFFC7":
      "text-yellow-500 border-yellow-400 bg-yellow-100/10 hover:bg-yellow-100/30",

    // New colors from compounds
    "#ADD8E6": "text-sky-500 border-sky-400 bg-sky-200/10 hover:bg-sky-200/30", // Water
    "#A9A9A9":
      "text-gray-500 border-gray-400 bg-gray-500/10 hover:bg-gray-500/30", // Carbon Dioxide
    "#E6E6FA":
      "text-purple-500 border-purple-400 bg-purple-200/10 hover:bg-purple-200/30", // Methane
    "#FFFFFF":
      "text-gray-500 border-gray-400 bg-gray-100/10 hover:bg-gray-100/30", // Sodium Chloride
    "#D8E6FF":
      "text-blue-500 border-blue-400 bg-blue-200/10 hover:bg-blue-200/30", // Ammonia
    "#FFFF00":
      "text-yellow-500 border-yellow-400 bg-yellow-500/10 hover:bg-yellow-500/30", // Sulfuric Acid
    "#F5DEB3":
      "text-amber-500 border-amber-400 bg-amber-200/10 hover:bg-amber-200/30", // Glucose
    "#FFE4B5":
      "text-amber-500 border-amber-400 bg-amber-300/10 hover:bg-amber-300/30", // Ethanol
    "#FFA07A":
      "text-orange-500 border-orange-400 bg-orange-300/10 hover:bg-orange-300/30", // Acetic Acid
    "#F0E68C":
      "text-yellow-500 border-yellow-400 bg-yellow-400/10 hover:bg-yellow-400/30", // Calcium Carbonate
    "#87CEEB": "text-sky-500 border-sky-400 bg-sky-300/10 hover:bg-sky-300/30", // Sodium Hydroxide
    "#800080":
      "text-purple-500 border-purple-400 bg-purple-700/10 hover:bg-purple-700/30", // Potassium Permanganate
    "#FF4500":
      "text-orange-500 border-orange-400 bg-orange-600/10 hover:bg-orange-600/30", // Hydrochloric Acid
    "#708090":
      "text-gray-500 border-gray-400 bg-gray-600/10 hover:bg-gray-600/30", // Sulfur Dioxide
    "#F8F8FF":
      "text-gray-500 border-gray-400 bg-gray-100/10 hover:bg-gray-100/30", // Hydrogen Peroxide
    "#FFD700":
      "text-yellow-500 border-yellow-400 bg-yellow-500/10 hover:bg-yellow-500/30", // Nitric Acid
    "#D3D3D3":
      "text-gray-500 border-gray-400 bg-gray-300/10 hover:bg-gray-300/30", // Sodium Bicarbonate
    "#B0C4DE":
      "text-blue-500 border-blue-400 bg-blue-300/10 hover:bg-blue-300/30", // Calcium Hydroxide
    "#D2691E":
      "text-orange-500 border-orange-400 bg-orange-700/10 hover:bg-orange-700/30", // Phosphoric Acid
    "#F5F5DC":
      "text-yellow-500 border-yellow-400 bg-yellow-100/10 hover:bg-yellow-100/30", // Aluminum Oxide
    "#DCDCDC":
      "text-gray-500 border-gray-400 bg-gray-300/10 hover:bg-gray-300/30", // Silicon Dioxide
    "#B22222": "text-red-500 border-red-400 bg-red-700/10 hover:bg-red-700/30", // Iron Oxide (Rust)
    "#FFFFE0":
      "text-yellow-500 border-yellow-400 bg-yellow-100/10 hover:bg-yellow-100/30", // Lead(II) Nitrate
    "#4682B4":
      "text-blue-500 border-blue-400 bg-blue-600/10 hover:bg-blue-600/30", // Copper(II) Sulfate
    "#F5F5F5":
      "text-gray-500 border-gray-400 bg-gray-100/10 hover:bg-gray-100/30", // Sodium Nitrate
    "#FAFAD2":
      "text-yellow-500 border-yellow-400 bg-yellow-100/10 hover:bg-yellow-100/30", // Barium Sulfate
    "#E0FFFF":
      "text-cyan-500 border-cyan-400 bg-cyan-100/10 hover:bg-cyan-100/30", // Potassium Nitrate
    "#EEE8AA":
      "text-yellow-500 border-yellow-400 bg-yellow-200/10 hover:bg-yellow-200/30", // Ammonium Nitrate
    "#FDF5E6":
      "text-yellow-500 border-yellow-400 bg-yellow-100/10 hover:bg-yellow-100/30", // Titanium Dioxide
    "#8B4513":
      "text-orange-500 border-orange-400 bg-orange-800/10 hover:bg-orange-800/30", // Caffeine
    "#00FA9A":
      "text-green-500 border-green-400 bg-green-400/10 hover:bg-green-400/30", // Sodium Hypochlorite
    "#87CEFA": "text-sky-500 border-sky-400 bg-sky-300/10 hover:bg-sky-300/30", // Ozone
    "#98FB98":
      "text-green-500 border-green-400 bg-green-300/10 hover:bg-green-300/30", // Chloroform
    "#DAA520":
      "text-yellow-500 border-yellow-400 bg-yellow-600/10 hover:bg-yellow-600/30", // Benzene
    "#8B0000": "text-red-500 border-red-400 bg-red-800/10 hover:bg-red-800/30", // Toluene
    "#FFDEAD":
      "text-orange-500 border-orange-400 bg-orange-200/10 hover:bg-orange-200/30", // Formaldehyde
    "#DC143C": "text-red-500 border-red-400 bg-red-600/10 hover:bg-red-600/30", // Hydrogen Cyanide
    "#FAEBD7":
      "text-orange-500 border-orange-400 bg-orange-100/10 hover:bg-orange-100/30", // Methanol
    "#AFEEEE":
      "text-cyan-500 border-cyan-400 bg-cyan-200/10 hover:bg-cyan-200/30", // Sodium Sulfate
    "#F0FFF0":
      "text-green-500 border-green-400 bg-green-100/10 hover:bg-green-100/30", // Boric Acid
    "#FFFAFA":
      "text-gray-500 border-gray-400 bg-gray-100/10 hover:bg-gray-100/30", // Plaster of Paris
    "#800000": "text-red-500 border-red-400 bg-red-800/10 hover:bg-red-800/30", // Ferric Chloride
    "#228B22":
      "text-green-500 border-green-400 bg-green-700/10 hover:bg-green-700/30", // Nickel Sulfate
  };

  const colorClasses = colorClassMap[color];
  return colorClasses;
};

# AirSense

Know Your Air. Plan Your Day. Air quality monitoring and early-warning frontend for university campuses in Khairpur, Sindh.

**All data is simulated.** No sensor, public API or forecasting model is connected. Demo values are generated in `src/data/mock.ts`.

## Run
```
npm install
npm run dev        # http://localhost:5173
npm test           # AQI, threshold, forecast-crossing, analytics, format tests
npm run build      # typecheck + production build
npm run preview
```
Requires Node 18+.

## Structure
- `src/services/` async service layer (swap each function for a REST call later)
- `src/data/mock.ts` the only place sample values live
- `src/utils/aqi.ts` single AQI classification + threshold logic (EPA and a compact campus scale; never mixed)
- `src/utils/alerts.ts` alerts derived from readings, forecast and current thresholds
- `src/hooks/` settings context (localStorage) and TanStack Query hooks
- `src/pages/`, `src/components/{layout,air-quality,charts,forecasts,alerts,ui}`

## Needs a backend / real source
- Live readings: public AQ API (via backend proxy, no keys in the browser) and/or campus sensor
- Forecasting model service (predictions, error metrics, uncertainty)
- Dust sensor (dust level is currently estimated from PM10)
- Alert delivery beyond the browser (push, SMS, campus displays), user accounts, server-side alert/settings storage

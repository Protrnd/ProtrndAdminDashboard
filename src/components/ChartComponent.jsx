import "../css/chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import { colors } from "../styled/UniversalStyles";

function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer
        width="100%"
        height={"100%"}
        aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis
            dataKey="name"
            stroke={colors.blue}
          />
          <YAxis stroke={colors.blue} />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={colors.red}
          />
          <Tooltip />
          {grid && (
            <CartesianGrid
              stroke="#e0dfdf"
              strokeDasharray="5 5"
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;

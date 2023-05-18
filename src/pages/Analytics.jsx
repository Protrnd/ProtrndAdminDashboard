import {
  AnalyticsChartContainer,
  AnalyticsContainer,
  AnalyticsContent,
  AnalyticsFilterBtn,
} from "../styled/AnalyticStyled";
import ChartComponent from "../components/ChartComponent";
import { revenueData } from "../utils/revenueData";

const Analytics = () => {
  return (
    <AnalyticsContainer>
      <AnalyticsChartContainer>
        <ChartComponent
          data={revenueData}
          title={"REVENUE ANALYTICS FROM 1 APRIL - 30 APRIL 2023"}
          grid
          dataKey="Revenue"
        />
      </AnalyticsChartContainer>
      <AnalyticsContent>
        <h5>START DATE:</h5>
        <div className="dropdown show">
          <a
            className="btn btn-primary dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            April 1, 2023
          </a>

          <div
            className="dropdown-menu"
            aria-labelledby="dropdownMenuLink">
            <a
              className="dropdown-item"
              href="#">
              Action
            </a>
            <a
              className="dropdown-item"
              href="#">
              Another action
            </a>
            <a
              className="dropdown-item"
              href="#">
              Something else here
            </a>
          </div>
        </div>
        <h5>END DATE:</h5>
        <div className="dropdown show">
          <a
            className="btn btn-primary dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            April 1, 2023
          </a>

          <div
            className="dropdown-menu"
            aria-labelledby="dropdownMenuLink">
            <a
              className="dropdown-item"
              href="#">
              Action
            </a>
            <a
              className="dropdown-item"
              href="#">
              Another action
            </a>
            <a
              className="dropdown-item"
              href="#">
              Something else here
            </a>
          </div>
        </div>
        <AnalyticsFilterBtn>Add Filter</AnalyticsFilterBtn>
      </AnalyticsContent>
    </AnalyticsContainer>
  );
};

export default Analytics;

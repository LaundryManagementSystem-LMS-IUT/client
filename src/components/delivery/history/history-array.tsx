import { Pagination } from "react-bootstrap";
import { useState } from "react";
import HistoryCard from "./history-card";

type HistoryArrayProps={
  historyRequests: {
    _id: string;
    from: string;
    to: string;
    source: string;
    status:string;
    sink: string;
}[],
  setHistoryRequests:React.Dispatch<React.SetStateAction<{
    _id: string;
    from: string;
    to: string;
    source: string;
    status:string;
    sink: string;
}[]>>
}

const HistoryArray = ({historyRequests,setHistoryRequests}:HistoryArrayProps) => {
  const itemsPerPage = 4; // Number of items per page
  const totalPages = Math.ceil(historyRequests.length / itemsPerPage); // Total number of pages
  const [currentPage, setCurrentPage] = useState(1); // Current active page
  const handlePageChange = (pageNumber:number) => {
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedDeliveries = historyRequests.slice(startIndex, endIndex);
  return ( 
  <div className="dashboard-array">
    <div>
      <div className="row">
        {
          displayedDeliveries.map((history) => (
            <div
              key={history._id}
            >
                <HistoryCard
                  history={history}
                />
            </div>
          ))}
      </div>
      <div>
        <Pagination  className="m-auto py-3">
          <Pagination.First
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          />
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {Array.from({ length: totalPages }).map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={currentPage === index + 1}
              onClick={() => handlePageChange(index + 1)}
              className="pagination"
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </div>
  </div> 
  );
}
 
export default HistoryArray;
import { Pagination } from "react-bootstrap";
import DeliveryCard from "../dashboard/delivery-dashboard-cards";
import { useState } from "react";
import OngoingCard from "./ongoing-card";

type OngoingArrayProps={
  ongoingRequests: {
    _id: string;
    from: string;
    to: string;
    source: string;
    sourceLocation: {
        lat: number;
        lng: number;
    };
    sinkLocation: {
      lat: number;
      lng: number;
    };
    sink: string;
}[],
  setOngoingRequests:React.Dispatch<React.SetStateAction<{
    _id: string;
    from: string;
    to: string;
    source: string;
    sourceLocation: {
        lat: number;
        lng: number;
    };
    sinkLocation: {
      lat: number;
      lng: number;
    };
    sink: string;
}[]>>
}

const OngoingArray = ({ongoingRequests,setOngoingRequests}:OngoingArrayProps) => {
  const itemsPerPage = 4; // Number of items per page
  const totalPages = Math.ceil(ongoingRequests.length / itemsPerPage); // Total number of pages
  const [currentPage, setCurrentPage] = useState(1); // Current active page
  const handlePageChange = (pageNumber:number) => {
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedDeliveries = ongoingRequests.slice(startIndex, endIndex);
  return ( 
  <div className="dashboard-array">
    <div>
      <div className="row">
        {
          displayedDeliveries.map((ongoing) => (
            <div
              key={ongoing._id}
            >
                <OngoingCard
                  ongoing={ongoing}
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
 
export default OngoingArray;
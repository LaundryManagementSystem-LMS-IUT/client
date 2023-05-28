import { Pagination } from "react-bootstrap";
import DeliveryCard from "./delivery-dashboard-cards";
import { useState } from "react";

type DashboardArrayProps={
  deliveryRequests: {
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
  setDeliveryRequests:React.Dispatch<React.SetStateAction<{
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

const DashboardArray = ({deliveryRequests,setDeliveryRequests}:DashboardArrayProps) => {
  const itemsPerPage = 4; // Number of items per page
  const totalPages = Math.ceil(deliveryRequests.length / itemsPerPage); // Total number of pages
  const [currentPage, setCurrentPage] = useState(1); // Current active page
  const handlePageChange = (pageNumber:number) => {
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedDeliveries = deliveryRequests.slice(startIndex, endIndex);
  return ( 
  <div className="dashboard-array">
    <div>
      <div className="row">
        {
          displayedDeliveries.map((delivery) => (
            <div
              key={delivery._id}
            >
                <DeliveryCard
                  delivery={delivery}
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
 
export default DashboardArray;
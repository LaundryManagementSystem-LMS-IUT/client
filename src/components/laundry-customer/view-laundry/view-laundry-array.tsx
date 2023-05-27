import { useState } from "react";
import LaundryCard from "./view-laundry-card";
import { Pagination } from "react-bootstrap";

type Laundries={
  array:{
    id: string;
    name: string;
    location: string;
    imageURL: string;
}[]
}

const LaundryArray = ({array}:Laundries) => {
  const itemsPerPage = 8; // Number of items per page
  const totalPages = Math.ceil(array.length / itemsPerPage); // Total number of pages
  const [currentPage, setCurrentPage] = useState(1); // Current active page
  const handlePageChange = (pageNumber:number) => {
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedLaundries = array.slice(startIndex, endIndex);
  return ( 
  <div className="laundry-cards">
    <div>
      <div className="row">
        {
          displayedLaundries.map((laundry) => (
            <div
              className="col-xs-6 col-sm-8 col-md-8 col-lg-4 my-2"
              key={laundry.id}
            >
                <LaundryCard
                  name={laundry.name}
                  location={laundry.location}
                  imageURL={laundry.imageURL}
                />
            </div>
          ))}
      </div>
      <div className="d-flex justify-content-center mt-3">
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
 
export default LaundryArray;
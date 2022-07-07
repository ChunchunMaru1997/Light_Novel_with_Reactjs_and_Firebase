import React from "react";
import BookDetailBody from "./components/book_detail_body";
import BookHeader from "./components/book_header";

const BookDetailScreen = () => {
	return (
		<div className="body-container"
			style={{
				backgroundColor: "#ffffff",
				marginTop: "12vw",
				padding: "16px",
				borderRadius: "10px",
				color: "#333",
			}}
		>
			<BookHeader />
		<BookDetailBody/></div>)
}

export default BookDetailScreen;
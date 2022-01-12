import React from "react";

const UserdetailsCard = (props) => {
  return (
    <>
      <div className="detailcard-wrapper">
        <h4>{props.heading}</h4>
        <p>{props.value == null ? "Not Available" : props.value}</p>
      </div>
    </>
  );
};

const UserProfileCard = (props) => {
  console.log(props.userdetails);

  return (
    <>
      <div className="card-container">
        <UserdetailsCard
          heading="Phone Number"
          value={props.userdetails["phonenumber"]}
        />
        <UserdetailsCard
          heading="Booked-Rooms Type"
          value={
            props.userdetails["bookedrooms"] == null
              ? props.userdetails["bookedrooms"]
              : props.userdetails["bookedrooms"]["type"]
          }
        />
        <UserdetailsCard
          heading="Total Booked-Rooms"
          value={
            props.userdetails["bookedrooms"] == null
              ? props.userdetails["bookedrooms"]
              : props.userdetails["bookedrooms"]["no_of_rooms"]
          }
        />
        <UserdetailsCard
          heading="Check-in Time"
          value={
            props.userdetails["checkin"] == null
              ? props.userdetails["checkin"]
              : props.userdetails["checkin"].slice(0, 10)
          }
        />
        <UserdetailsCard
          heading="Check-out Time"
          value={
            props.userdetails["checkout"] == null
              ? props.userdetails["checkout"]
              : props.userdetails["checkout"].slice(0, 10)
          }
        />
        <UserdetailsCard
          heading="Total Bill"
          value={props.userdetails["totalbill"]}
        />
        <UserdetailsCard
          heading="Paid Bill"
          value={props.userdetails["paidbill"]}
        />
      </div>
    </>
  );
};

export default UserProfileCard;

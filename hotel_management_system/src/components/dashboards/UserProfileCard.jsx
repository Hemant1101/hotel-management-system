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
          heading="Booked-Rooms"
          value={props.userdetails["bookedrooms"]}
        />
        <UserdetailsCard
          heading="Check-in Time"
          value={props.userdetails["checkin"]}
        />
        <UserdetailsCard
          heading="Check-out Time"
          value={props.userdetails["checkout"]}
        />
        <UserdetailsCard
          heading="Total Bill"
          value={props.userdetails["totalbill"]}
        />
        <UserdetailsCard
          heading="Unpaid Bill"
          value={props.userdetails["unpaidbill"]}
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

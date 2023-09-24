import { Steps } from "antd";
import {
  LoadingOutlined,
  UserOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import React from "react";
import "./index.css";

const ProcessSteps = ({ applicationStatus, statusByRole }) => {
  const generateSteps = (status, role) => {
    const JuniorLoadingicon =
      status === "pending" && role === "juniorOfficer" ? (
        <LoadingOutlined />
      ) : status === "" ? (
        <UserOutlined />
      ) : null;
    const JuniorUsericon =
      status === "pending" && role === "assistantGeneral" ? (
        <UserOutlined />
      ) : status === "" ? (
        <UserOutlined />
      ) : null;

    const SeniorLoadingicon =
      status === "pending" && role === "assistantGeneral" ? (
        <LoadingOutlined />
      ) : status === "" ? (
        <UserOutlined />
      ) : null;
    const SeniorUsericon =
      status === "approved" && role === "assistantGeneral" ? (
        <UserOutlined />
      ) : status === "" ? (
        <UserOutlined />
      ) : null;
      const Usericon =
      status === "rejected" ? (
        <UserOutlined />
      ) : status === "" ? (
        <UserOutlined />
      ) : null;
    const pendingStatus = status === "pending" && "Pending";
    const rejectedStatus = status === "rejected" && "Rejected";
    const approvedStatus = status === "approved" && "Approved";
    const steps = [
      {
        title: "Junior Officer",
        icon: JuniorLoadingicon || JuniorUsericon || Usericon,
      },
      {
        title: "Assistant General",
        icon: SeniorLoadingicon || SeniorUsericon || Usericon,
      },
      {
        title: pendingStatus || rejectedStatus || approvedStatus,
        icon: status === "rejected" || "pending" ? <WarningOutlined /> : null,
      },
    ];

    // Check for the application status and update the steps accordingly
    if (status === "rejected") {
      steps[2].status = "error"; // Set the Approved step to error status
    } else if (status === "pending") {
      steps[2].status = "wait"; // Set the Approved step to wait status for pending applications
    }

    return steps;
  };

  return (
    <div>
      <Steps
        style={{ width: "85%", margin: "0 auto", fontFamily: "sans-serif" }}
        items={generateSteps(applicationStatus, statusByRole)}
      />
    </div>
  );
};

export default ProcessSteps;
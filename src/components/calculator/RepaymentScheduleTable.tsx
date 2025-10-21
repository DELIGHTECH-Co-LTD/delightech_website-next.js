"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RepaymentEntry } from "./types";

interface RepaymentScheduleTableProps {
  schedule: RepaymentEntry[];
}

export default function RepaymentScheduleTable({
  schedule,
}: RepaymentScheduleTableProps) {
  return (
    <div className="max-h-60 overflow-y-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Month</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead>Interest</TableHead>
            <TableHead>Principal</TableHead>
            <TableHead>Balance</TableHead>
            <TableHead>Due Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {schedule.map((entry) => (
            <TableRow key={entry.month}>
              <TableCell>{entry.month}</TableCell>
              <TableCell className="font-semibold text-blue-600">
                {entry.monthlyPayment}
              </TableCell>
              <TableCell className="text-red-600">{entry.interest}</TableCell>
              <TableCell className="text-green-600">
                {entry.principalPayment}
              </TableCell>
              <TableCell>{entry.remainingBalance}</TableCell>
              <TableCell className="text-sm">{entry.dueDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

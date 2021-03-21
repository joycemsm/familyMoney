import React from "react";
import { Container } from "./styles";

export function TrasactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Software development </td>
            <td className="deposit">12.000 € </td>
            <td>Development </td>
            <td>21/03/2021 </td>
          </tr>
          <tr>
            <td>Rentcar </td>
            <td className="withdraw">-100 € </td>
            <td>Service </td>
            <td>18/03/2021 </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

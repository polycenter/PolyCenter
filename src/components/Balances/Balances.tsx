import React from "react";
import { BalanceContainer } from "./Balances.styles";

type Props = {};
function Balances({}: Props) {
  return (
    <BalanceContainer>
      <table>
        <th></th>
        <th>Token</th>
        <th>Amount</th>
        <th>USD</th>
        <tr>
          <td>
            <span role="img" aria-label="BACKUP">
              🎁
            </span>
          </td>
          <td>BACKUP</td>
          <td>20</td>
          <td>2000</td>
        </tr>
        <tr>
          <td>
            <span role="img" aria-label="SUNI">
              😪
            </span>
          </td>
          <td>SUNI</td>
          <td>200000</td>
          <td>1443</td>
        </tr>
        <tr>
          <td>
            <span role="img" aria-label="SUNI">
              🔮
            </span>
          </td>
          <td>SUNI</td>
          <td>175000</td>
          <td>200</td>
        </tr>
      </table>
    </BalanceContainer>
  );
}
export default Balances;

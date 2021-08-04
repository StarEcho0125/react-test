import React, { useEffect } from 'react';

import { pricesWs } from './config';

const CryptoTable = () => {
	useEffect(() => {
		pricesWs.onmessage = function (msg) {
			console.log(msg.data)
		}
	}, []);
	return (
		<div className="card card-scroll-rt">
			<div className="card-body p-0">
				<table className="table table-hover table-striped">
					<thead>
						<tr>
							<th scope="col">Traded</th>
							<th scope="col">Token Price</th>
							<th scope="col">Value</th>
							<th scope="col">Time</th>
						</tr>
					</thead>
					<tbody>
					<tr>
						<td>10000</td>
						<td>32</td>
						<td>453</td>
						<td>12;39</td>
					</tr>
					<tr>
						<td>10000</td>
						<td>32</td>
						<td>453</td>
						<td>12;39</td>
					</tr>
					<tr>
						<td>10000</td>
						<td>32</td>
						<td>453</td>
						<td>12;39</td>
					</tr>
					<tr>
						<td>10000</td>
						<td>32</td>
						<td>453</td>
						<td>12;39</td>
					</tr>
					<tr>
						<td>10000</td>
						<td>32</td>
						<td>453</td>
						<td>12;39</td>
					</tr>
					<tr>
						<td>10000</td>
						<td>32</td>
						<td>453</td>
						<td>12;39</td>
					</tr>
					<tr>
						<td>10000</td>
						<td>32</td>
						<td>453</td>
						<td>12;39</td>
					</tr>
					<tr>
						<td>10000</td>
						<td>32</td>
						<td>453</td>
						<td>12;39</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default CryptoTable;
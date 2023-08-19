import React from 'react';
// import HistoryCard from './HistoryCard';

const History = (): any =>   {
  // const [state, setState] = React.useState({
  //   fetchedHistory: false,
  //   data: [],
  // });

  // React.useEffect(() => {
  //   fetch('/api/history')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setState({
  //         fetchedHistory: true,
  //         data: data,
  //       });
  //     });
  // }, []);

  // get query for all items in database
  // loop thru items, creating a div for each prompt
  //    - inside each prompt div, show prompt on one line followed by small images on the next line

  // if (state.fetchedHistory === false) {
  //   return <></>;
  // }

  const historyCards = [];
  // for (let i = state.data.length - 1; i >= 0; i--) {
  //   historyCards.push(
  //     <HistoryCard
  //       key={i}
  //       prompt={state.data[i].prompt}
  //       urls={state.data[i].url}
  //     />
  //   );
  // }

  return (
    <div className='w-full pt-24'>
      <h1 className='title-font text-center text-2xl'>History</h1>
    </div>
  );
};

export default History;

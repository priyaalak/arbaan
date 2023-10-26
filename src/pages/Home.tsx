import React from 'react'
import { TotalPosts, TotalComments, TotalTodos, Barchart, Piechart, TodoDashboard, PostDashboard } from '../components'

import 'bootstrap-icons/font/bootstrap-icons.css';
function Home() {
  return (
    <div className="p-3">
      <div className="container-fluid">
        <div className="row">
          <TotalPosts />
          <TotalComments />
          <TotalTodos />
        </div>
        <div className="row">
          <div className="col-12 col-md-8 p-3">
            <Barchart />
          </div>
          <div className="col-12 col-md-4 p-3">
            <Piechart />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 p-3">
            <TodoDashboard />
          </div>
          <div className="col-12 col-md-8 p-3">
            <PostDashboard />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./style.css/Task.css";

const Task = ({ data }) => {
  return (
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {data.map((item, index) => {
          return (
            <>
              <div key={index}>
                <div class="col sm-col-12 lg-col-12 md-col-12">
                  <div class="card h-100 custom-card ">
                    <div class="card-body">
                      <h6 class="text-secondary text-center">{item.tag}</h6>
                      <h5 class="card-title text-center text-bold">
                        {item.price}
                      </h5>
                      <hr />
                      <p class="card-text">
                        <ul class="fa-ul">
                          <li>
                            <span class="fa-li">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            {item.user}
                          </li>
                          <li>
                            <span class="fa-li">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            {item.storage}
                          </li>
                          <li>
                            <span class="fa-li">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            {item.publicprojects}
                          </li>
                          <li>
                            <span class="fa-li">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            {item.access}
                          </li>
                          <li class={item.privatetext}>
                            <span class="fa-li">
                              <i class={item.privateicon}></i>
                            </span>
                            {item.privateprojects}
                          </li>
                          <li class={item.supporttext}>
                            <span class="fa-li">
                              <i class={item.supporticon}></i>
                            </span>
                            {item.support}
                          </li>
                          <li class={item.subtext}>
                            <span class="fa-li">
                              <i class={item.subicon}></i>
                            </span>
                            {item.subdomain}
                          </li>
                          <li class={item.reporttext}>
                            <span class="fa-li">
                              <i class={item.reporticon}></i>
                            </span>
                            {item.reports}
                          </li>
                        </ul>
                      </p>
                      <div class="d-grid gap-2 ">
                        <button class="btn btn-primary" type="button">
                          Button
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Task;

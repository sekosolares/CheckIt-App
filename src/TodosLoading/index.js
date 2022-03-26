import React from 'react';
import ContentLoader from "react-content-loader"


function TodosLoading() {
      return (
            <ContentLoader
                  speed={1.3}
                  width={324}
                  height={200}
                  viewBox="0 0 324 200"
                  backgroundColor="#c7c7c7"
                  foregroundColor="#808080"
            >
                  <rect x="0" y="0" rx="8" ry="8" width="324" height="57" />
                  <rect x="0" y="67" rx="8" ry="8" width="324" height="57" />
                  <rect x="0" y="134" rx="8" ry="8" width="324" height="57" />
            </ContentLoader>
      )
}

export { TodosLoading };
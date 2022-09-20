import { Fragment } from "react";

interface AdditionalInfoProps {
  vIndex: number;
  selectionStatus: boolean;
  variations: {
    size: string;
    price: number;
    weight: string;
    dimensions: string;
  }[];
  subDescription: string;
  additionalInfo: {
    warning: string;
    ingredients: string;
  };
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = (props) => {
  return (
    <Fragment>
      {/* additional info */}
      {props.subDescription !== "" && (
        <div>
          <h2>Description</h2>
          <p>{props.subDescription}</p>
        </div>
      )}
      <div>
        {/* weight, dimensions -- these values are dynamic, specifcally for those with more than 1 variations */}
        {/* warning, ingredients, sizes -- these values are static */}
        <table>

          {/* weight and dimensions */}
          {props.selectionStatus && (
            <Fragment>
              <tr>
                <th>Weight</th>
                <td>{props.variations[props.vIndex].weight}</td>
              </tr>
              <tr>
                <th>Dimensions</th>
                <td>{props.variations[props.vIndex].dimensions}</td>
              </tr>
            </Fragment>
          )}

          {/* Warning */}
          {props.additionalInfo.warning !== "" && (
            <tr>
              <th>Warning</th>
              <td>{props.additionalInfo.warning}</td>
            </tr>
          )}

          {/* Ingredients */}
          {props.additionalInfo.ingredients !== "" && (
            <tr>
              <th>Ingredients</th>
              <td>{props.additionalInfo.ingredients}</td>
            </tr>
          )}

          {/* Sizes */}
          {props.variations[props.vIndex].size !== "" &&
            <tr>
              <th>Sizes</th>
              <td>
                {props.variations.map((variation, index) => (
                  <span>
                    {variation.size}
                    {index !== props.variations.length - 1 ? ", " : ""}
                  </span>
                ))}
              </td>
            </tr>
          }
        </table>
      </div>
    </Fragment>
  );
};

export default AdditionalInfo;

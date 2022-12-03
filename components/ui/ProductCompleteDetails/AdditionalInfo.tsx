import { Fragment } from "react";
import classes from "./AdditionalInfo.module.scss";

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
      <h2 className={`${classes['additional-info']}`}>Additional Information</h2>

      {/* table */}
      <div className={`${classes['table-container']}`}>
        {/* weight, dimensions -- these values are dynamic, specifcally for those with more than 1 variations */}
        {/* warning, ingredients, sizes -- these values are static */}
        <table className={classes.table}>
          {/* weight and dimensions */}
          {props.selectionStatus && (
            <Fragment>
              <tr className={`${classes.row}`}>
                <th className={`${classes['category']}`}>Weight</th>
                <td className={`${classes['data']}`}>{props.variations[props.vIndex].weight}</td>
              </tr>
              <tr className={`${classes.row}`}>
                <th className={`${classes['category']}`}>Dimensions</th>
                <td className={`${classes['data']}`}>{props.variations[props.vIndex].dimensions}</td>
              </tr>
            </Fragment>
          )}

          {/* Warning */}
          {props.additionalInfo.warning !== "" && (
            <tr className={`${classes.row}`}>
              <th className={`${classes['category']}`}>Warning</th>
              <td className={`${classes['data']}`}>{props.additionalInfo.warning}</td>
            </tr>
          )}

          {/* Ingredients */}
          {props.additionalInfo.ingredients !== "" && (
            <tr className={`${classes.row}`}>
              <th className={`${classes['category']}`}>Ingredients</th>
              <td className={`${classes['data']}`}>{props.additionalInfo.ingredients}</td>
            </tr>
          )}

          {/* Sizes */}
          {props.variations[props.vIndex].size !== "" &&
            <tr className={`${classes.row}`}>
              <th className={`${classes['category']}`}>Sizes</th>
              <td className={`${classes['data']}`}>
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

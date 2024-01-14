import React from 'react';

import { fromCamelCaseToTitleCase } from '../../util/StringUtil';
import requirementsJson from '../../data/requirements.json';

import './RequirementsChart.scss';

const renderRequirementsTableHeader = (requirements) => {
    let beltNames = [(<th key={`requirementsTable-beltHeader-empty-cell`} className="empty-cell"></th>)];
    if (requirements) {
        requirements.forEach((level) => {
            const beltKey = `requirementsTable-beltHeader-${level.beltColor}`;
            beltNames.push((<th key={beltKey} className="title-row">{level.beltColor}</th>));
        });
    }

    return (<tr>
        {beltNames}
    </tr>)
}

const renderRequirementRow = (requirements, requirementName) => {
    let allRequirementsInRow = [];

    if (requirements) {
        requirements.forEach((nextLevel) => {
            if (nextLevel[requirementName]) {
                const requirementsAtLevel = [];
                nextLevel[requirementName].forEach((specificItem) => {
                    const listItemKey = `requirementsTable-${nextLevel.beltColor}-${requirementName}-${specificItem.name}`;
                    requirementsAtLevel.push((<li className="requirements-list-single-item" key={listItemKey}>{specificItem.name}</li>));
                });

                allRequirementsInRow.push((
                    <td key={`requirementsTable-${nextLevel.beltColor}-${requirementName}-allRequirements`}>
                        <ul>
                            {requirementsAtLevel}
                        </ul>
                    </td>
                ));
            }
        });
    }
    return (
        <tr>
            <th>{fromCamelCaseToTitleCase(requirementName)}</th>
            {allRequirementsInRow}
        </tr>
    );
}

export const RequirementsChart = ({...props}) => {
    const version = requirementsJson.version;
    const revisionDate = requirementsJson.revisionDate;
    return (
        <>
            <table className="requirements">
                <tbody>
                    {renderRequirementsTableHeader(requirementsJson.requirements)}
                    {renderRequirementRow(requirementsJson.requirements, "forms")}
                    {renderRequirementRow(requirementsJson.requirements, "strikes")}
                    {renderRequirementRow(requirementsJson.requirements, "kicks")}
                    {renderRequirementRow(requirementsJson.requirements, "blocks")}
                    {renderRequirementRow(requirementsJson.requirements, "stances")}
                    {renderRequirementRow(requirementsJson.requirements, "techniques")}
                    {renderRequirementRow(requirementsJson.requirements, "groundDefenses")}
                    {renderRequirementRow(requirementsJson.requirements, "chiKung")}
                    {renderRequirementRow(requirementsJson.requirements, "theory")}
                    {renderRequirementRow(requirementsJson.requirements, "sparring")}
                </tbody>
            </table>
            <div className="revision-annotation">Last Revision: v{version} ({revisionDate})</div>
        </>
    );
};

RequirementsChart.propTypes = {
};

RequirementsChart.defaultProps = {
};
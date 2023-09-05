/*
	This file is part of the Microsoft PowerApps code samples.
	Copyright (C) Microsoft Corporation.  All rights reserved.
	This source code is intended only as a supplement to Microsoft Development Tools and/or
	on-line documentation.  See these other materials for detailed information regarding
	Microsoft code samples.

	THIS CODE AND INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER
	EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF
	MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.
 */

import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class MyIframe implements ComponentFramework.StandardControl<IInputs, IOutputs>
{
	// Reference to IFrame HTMLElement
	private _myIframe: HTMLElement;

	// Reference to the control container HTMLDivElement
	// This element contains all elements of our custom control example
	private _container: HTMLDivElement;

	// Flag if control view has been rendered
	private _controlViewRendered: boolean;

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
		this._container = container;
		this._controlViewRendered = false;
	}

	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void {
		if (!this._controlViewRendered) {
			this._controlViewRendered = true;
			this.renderIframe();
		}

		const urlValue = context.parameters.urlValue.raw ?? "https://www.bing.com/";
		const frameWidth = Number.isInteger(context.parameters.frameWidthValue.raw) ? context.parameters.frameWidthValue.raw : 800;
		const frameHeight = Number.isInteger(context.parameters.frameHeightValue.raw) ? context.parameters.frameHeightValue.raw : 600;
		frameWidth && frameHeight && this.updateIframe(urlValue, frameWidth, frameHeight);
	}

	/**
	 * Render IFrame HTML Element and appends the IFrame to the control container
	 */
	private renderIframe(): void {
		this._myIframe = this.createIFrameElement();
		this._container.appendChild(this._myIframe);
	}

	/**
	 * Updates the URL of the IFrame to display the page of the updated url
	 * @param url : url of iframe
	 * @param frameWidth : width of iframe
	 * @param frameHeight : height of iframe
	 */
	private updateIframe(url: string, frameWidth: number, frameHeight: number): void {
		// Update the IFrame to point to the updated URL
		this._myIframe.setAttribute("src", url);
		this._myIframe.style.height = frameHeight + "px";
		this._myIframe.style.width = frameWidth + "px";
	}

	/**
	 * Helper method to create an IFrame HTML Element
	 */
	private createIFrameElement(): HTMLElement {
		const iFrameElement: HTMLElement = document.createElement("iframe");
		iFrameElement.setAttribute("class", "SampleControl_IFrame");
		iFrameElement.style.height = "600px";
		iFrameElement.style.width = "800px";
		return iFrameElement;
	}

	/**
	 * It is called by the framework prior to a control receiving new data.
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
	 */
	public getOutputs(): IOutputs {
		// no-op: method not leveraged by this example custom control
		return {};
	}

	/**
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void {
		// no-op: method not leveraged by this example custom control
	}
}